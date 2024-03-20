import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { CardComponent } from './components/card/card.component';
import { BadgeModule } from 'primeng/badge';
import { UserCardComponent } from './components/user.card/user.card.component';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DialogModule } from 'primeng/dialog';
import { CardTeamMembersComponent } from './components/card-team-members/card-team-members.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { environment } from 'src/enviroments/enviroments';
import { AngularFireModule } from '@angular/fire/compat';
import { RegisterComponent } from './components/register-component/register-component.component'


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    UserCardComponent,
    SidebarComponent,
    CardTeamMembersComponent,
    LoginPageComponent,
    DashboardPageComponent,
    RegisterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    CardModule,
    SplitterModule,
    SidebarModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    ToolbarModule,
    TooltipModule,
    BadgeModule,
    DividerModule,
    FieldsetModule,
    TableModule,
    DialogModule,
    ScrollTopModule,
    ScrollPanelModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
