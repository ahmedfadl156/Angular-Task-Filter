import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true, 
  imports: [CommonModule, FormsModule],  
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users = [
    { name: 'Ahmed Fadl', address: 'Damietta' },
    { name: 'Mohamed Hassan', address: 'Giza' },
    { name: 'Mahmoud Ibrahim', address: 'Alexandria' },
    { name: 'Khaled El-Sayed', address: 'Mansoura' },
    { name: 'Yasser Abdelrahman', address: 'Assiut' },
    { name: 'Sameh Mostafa', address: 'Cairo' },
    { name: 'Ali Fouad', address: 'Luxor' },
    { name: 'Mostafa Salem', address: 'Port Said' },
    { name: 'Ibrahim Saeed', address: 'Fayoum' },
    { name: 'Karim Mohsen', address: 'Tanta' }
  ];

  searchTerm: string = '';

  get filteredUsers() {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
