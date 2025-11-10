import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { DigitalVisitingCardComponent } from './products/digital-visiting-card/digital-visiting-card.component';
import { BillingSoftwareComponent } from './products/billing-software/billing-software.component';
import { ServicesComponent } from './services/services.component';
import { BranchesComponent } from './services/branches/branches.component';
import { DigitalMarketingComponent } from './services/digital-marketing/digital-marketing.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { JobsComponent } from './jobs/jobs.component';
import { ApplicationFormComponent } from './careers/application-form/application-form.component';
import { CourseTrainingComponent } from './course-training/course-training.component';
import { CourseInternshipComponent } from './course-internship/course-internship.component';
import { CoursesComponent } from './courses/courses.component';

import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { RegisterComponent } from './courses/course-detail/register/register.component';
import { NewsComponent } from './news/news.component';
import { CloudComputingComponent } from './services/cloud-computing/cloud-computing.component';
import { LoginComponent } from './login/login.component';
import { RegistersComponent } from './registers/registers.component';
import { EventsComponent } from './events/events.component';
import { SeoComponent } from './services/seo/seo.component';
import { PayperclickComponent } from './services/payperclick/payperclick.component';
import { ContentWritingComponent } from './services/content-writing/content-writing.component';
import { WebDevelopmentComponent } from './services/web-development/web-development.component';
import { InfluenceMarketingComponent } from './services/influence-marketing/influence-marketing.component';
import { PhotographyAndVideoComponent } from './services/photography-and-video/photography-and-video.component';
import { SocialMediaMarketingComponent } from './services/social-media-marketing/social-media-marketing.component';

const routes: Routes = [
 { path: "", redirectTo: "home", pathMatch: "full" },

  // Authentication routes
  // { path: "login", component: LoginComponent },
  { path: "registers", component: RegistersComponent },
  // { path: "registers", redirectTo: "/register", pathMatch: "full" },

  // Main application routes (accessible after login)
  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "courses", component: CoursesComponent },
  { path: "course-detail/:name", component: CourseDetailComponent },
  { path: "register", component: RegisterComponent },
  { path: "events", component: EventsComponent},
  {
    path: "products",
    component: ProductsComponent,
    children: [
      { path: "digital-visiting-card", component: DigitalVisitingCardComponent },
      { path: "billing-software", component: BillingSoftwareComponent },
    ],
  },
  { path: "services", component: ServicesComponent },
  { path: "services/Cloud-computing", component: CloudComputingComponent },
  { path: "services/branches", component: BranchesComponent },
  { path: "services/digitalmarketing", component: DigitalMarketingComponent },
  { path: "services/seo", component: SeoComponent },
  { path: "services/payperclick", component: PayperclickComponent },
  { path: "services/content-writing", component: ContentWritingComponent },
  { path: "services/web-development", component: WebDevelopmentComponent },
  { path: "services/influence-marketing", component: InfluenceMarketingComponent },
  { path: "services/photography-and-video", component: PhotographyAndVideoComponent },
  { path: "services/social-media-marketing", component: SocialMediaMarketingComponent },

  { path: "course-internship", component: CourseInternshipComponent },
  { path: "jobs", component: JobsComponent },
  { path: "contact", component: ContactComponent },
  { path: "careers", component: CareersComponent },
  { path: "application-form", component: ApplicationFormComponent },
  { path: "apply-training", component: ApplicationFormComponent },
  { path: "apply-internship", component: ApplicationFormComponent },
  { path: "news", component: NewsComponent },

  // Fallback route
  // { path: "**", redirectTo: "/login" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
