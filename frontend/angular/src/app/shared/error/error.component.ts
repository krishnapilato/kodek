import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-error',
  template: `
    <div class="relative w-full min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-700 flex items-center justify-center">
      
      <!-- Decorative Shapes -->
      <div
        class="absolute top-[10%] left-[-120px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-48 h-48 rounded-full animate-bounce opacity-40 shadow-2xl"
        aria-hidden="true"></div>
      <div
        class="absolute bottom-[-150px] right-[-100px] bg-gradient-to-tr from-blue-300 to-indigo-600 w-72 h-48 rounded-[50%] animate-spin-slow opacity-30 shadow-xl transform rotate-[15deg]"
        aria-hidden="true"></div>
      <div
        class="absolute top-[20%] right-[10%] bg-gradient-to-t from-yellow-300 via-orange-400 to-red-500 w-64 h-64 rounded-full animate-pulse opacity-50 shadow-md"
        aria-hidden="true"></div>
      <div
        class="absolute bottom-[10%] left-[15%] bg-gradient-to-bl from-green-400 to-blue-500 w-80 h-40 rounded-[30%] animate-ping opacity-40 shadow-lg"
        aria-hidden="true"></div>
      <div
        class="absolute top-[5%] left-[60%] bg-gradient-to-b from-teal-500 to-cyan-600 w-56 h-56 rounded-full animate-ping opacity-50 shadow-2xl"
        aria-hidden="true"></div>

      <!-- Content -->
      <div class="relative text-center text-gray-100 px-6 py-12 space-y-6">
        <h1 class="text-9xl font-extrabold text-white mb-4 leading-tight tracking-wide">
          404
        </h1>
        <h2 class="text-3xl font-semibold text-gray-300">
          Oops! Page Not Found
        </h2>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          The page you're looking for doesn't exist or may have been moved. <br>  
          We'll redirect you shortly.
        </p>
        <p class="text-xl text-gray-200">
          Redirecting in <span class="font-bold">{{ countdown }}</span> seconds...
        </p>
        
        <!-- Home Button -->
        <button
          routerLink="/"
          class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#991B1B] text-white rounded-full font-semibold text-lg hover:bg-[#B91C1C] transition-all duration-300 transform hover:scale-110"
        >
          Take me home
        </button>
      </div>
    </div>
  `,
  imports: [RouterModule],
})
export class ErrorComponent implements OnInit {
  protected countdown: number = 10;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    interval(1000).pipe(take(this.countdown)).subscribe(() => this.countdown--, null, () => this.router.navigate(['/']));
  }
}