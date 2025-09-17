import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ZardBreadcrumbModule } from '@shared/components/ui/breadcrumb/breadcrumb.module';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  status: string;
  createdAt: string;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, ZardBreadcrumbModule],
  templateUrl: './data-table.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DataTableComponent {
  searchText = '';
  page = 1;
  pageSize = 5;

  users: User[] = Array.from({ length: 30 }).map((_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: ['Admin', 'Editor', 'User'][i % 3],
    department: ['IT', 'Finance', 'Marketing', 'HR', 'Sales'][i % 5],
    status: ['Active', 'Inactive'][i % 2],
    createdAt: `2025-0${(i % 9) + 1}-0${(i % 28) + 1}`,
  }));

  get filteredUsers() {
    const filtered = this.users.filter(
      (u) =>
        u.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        u.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
        u.department.toLowerCase().includes(this.searchText.toLowerCase()),
    );
    return filtered.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
  }

  get totalPages() {
    const filtered = this.users.filter(
      (u) =>
        u.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        u.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
        u.department.toLowerCase().includes(this.searchText.toLowerCase()),
    );
    return Math.ceil(filtered.length / this.pageSize);
  }

  onUpdate(user: User) {
    alert(`Update ${user.name}`);
  }

  onDelete(user: User) {
    if (confirm(`Delete ${user.name}?`)) {
      this.users = this.users.filter((u) => u.id !== user.id);
    }
  }

  changePage(n: number) {
    if (n >= 1 && n <= this.totalPages) this.page = n;
  }
}
