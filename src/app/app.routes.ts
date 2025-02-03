import { Routes } from '@angular/router';

export const routes: Routes = [
  // Login route
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
  },
  // Home page route, accessible post-login
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
    // canActivate: [AuthGuard], // Uncomment if using an authentication guard
    data:{title: 'Daily Wealth'}
  },
  // User-accessible routes
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent),
    data:{title: 'Register'}
  },
  {
    path: 'forum',
    loadComponent: () => import('./forum/forum.component').then(m => m.ForumComponent),
    data:{title: 'Forum'}
  },
  {
    path: 'quiz',
    loadComponent: () => import('./quiz/quiz.component').then(m => m.QuizComponent),
    data:{title: 'Quiz'}
  },
  // Admin-specific routes
  {
    path: 'admin-dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    data:{title: 'Admin Use Only'}
    // canActivate: [AdminGuard], // Uncomment to protect this route with an admin guard
  },
  {
    path: 'content-management',
    loadComponent: () => import('./content-management/content-management.component').then(m => m.ContentManagementComponent),
    data:{title: 'Manage Content'}
    // canActivate: [AdminGuard], // Protect this route as well
  },
  {
    path: 'course-management',
    loadComponent: () => import('./course-management/course-management.component').then(m => m.CourseManagementComponent),
    data:{title: 'Manage Courses'}
    // canActivate: [AdminGuard],
  },
  {
    path: 'subscription-management',
    loadComponent: () => import('./subscription-management/subscription-management.component').then(m => m.SubscriptionManagementComponent),
    data:{title: 'Manage Subscriptions'}
    // canActivate: [AdminGuard],
  },
  // Redirection and default route handling
  {
    path: '',
    redirectTo: 'home', // Default route redirects to login
    pathMatch: 'full',
  },
  {
    path: '**', // Wildcard route for catching anything not defined above
    redirectTo: 'home',
  },
];
