import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  
})
export class AuthService {

  constructor() { }

  // Store the user ID in localStorage after successful login
  login(userId: number): void {
    localStorage.setItem('user_id', userId.toString());
  }

  // Retrieve the user ID from localStorage
  getUserId(): number | null {
    const storedUserId = localStorage.getItem('user_id');
    return storedUserId ? parseInt(storedUserId, 10) : null;
  }

  // Check if the user is authenticated (i.e., user_id exists in localStorage)
  isAuthenticated(): boolean {
    return this.getUserId() !== null;
  }

  // Log out the user by clearing user_id from localStorage
  logout(): void {
    localStorage.removeItem('user_id');
  }
}
