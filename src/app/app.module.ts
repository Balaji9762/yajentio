import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { CourseTrainingComponent } from './course-training/course-training.component';
import { CourseInternshipComponent } from './course-internship/course-internship.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { DigitalVisitingCardComponent } from './products/digital-visiting-card/digital-visiting-card.component';
import { BillingSoftwareComponent } from './products/billing-software/billing-software.component';
import { BranchesComponent } from './services/branches/branches.component';
import { DigitalMarketingComponent } from './services/digital-marketing/digital-marketing.component';
import { PricingComponent } from './services/pricing/pricing.component';
import { JobsComponent } from './jobs/jobs.component';
import { ApplicationFormComponent } from './careers/application-form/application-form.component';
import { CoursesComponent } from './courses/courses.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { CommonModule } from "@angular/common";
import { BannerComponent } from './courses/banner/banner.component'


import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseBannerComponent } from './courses/course-detail/course-banner/course-banner.component';
import { RegisterComponent } from './courses/course-detail/register/register.component';
import { FeaturesComponent } from './courses/course-detail/features/features.component';
import { RecaptchaDirective } from './contact/recaptcha.directive';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { NewsComponent } from './news/news.component';
import { AddNEWSComponent } from './add-news/add-news.component';
import { CloudComputingComponent } from './services/cloud-computing/cloud-computing.component';
import { LoginComponent } from './login/login.component';
import { RegistersComponent } from './registers/registers.component';
import { EventsComponent } from './events/events.component';
import { ServiceCardComponent } from './services/digital-marketing/service-card/service-card.component';
import { SeoComponent } from './services/seo/seo.component';
import { PayperclickComponent } from './services/payperclick/payperclick.component';
import { ContentWritingComponent } from './services/content-writing/content-writing.component';
import { WebDevelopmentComponent } from './services/web-development/web-development.component';
import { InfluenceMarketingComponent } from './services/influence-marketing/influence-marketing.component';
import { PhotographyAndVideoComponent } from './services/photography-and-video/photography-and-video.component';
import { SocialMediaMarketingComponent } from './services/social-media-marketing/social-media-marketing.component';
import { ImageFallbackDirective } from './shared/image-fallback.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    CourseTrainingComponent,
    CourseInternshipComponent,
    CareersComponent,
    ContactComponent,
    ServicesComponent,
    DigitalVisitingCardComponent,
    BillingSoftwareComponent,
    BranchesComponent,
    DigitalMarketingComponent,
    PricingComponent,
    JobsComponent,
    ApplicationFormComponent,
    CoursesComponent,
    BannerComponent,


      CourseDetailComponent,
          CourseBannerComponent,
          RegisterComponent,
          FeaturesComponent,
          ChatBoxComponent,
          NewsComponent,
          AddNEWSComponent,
          CloudComputingComponent,
          LoginComponent,
          RegistersComponent,
          EventsComponent,
          ServiceCardComponent,
          SeoComponent,
          PayperclickComponent,
          ContentWritingComponent,
          WebDevelopmentComponent,
          InfluenceMarketingComponent,
          PhotographyAndVideoComponent,
          SocialMediaMarketingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RecaptchaModule,  // ✅ Import reCAPTCHA module
    RecaptchaFormsModule,
    RecaptchaDirective,
    ImageFallbackDirective,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
