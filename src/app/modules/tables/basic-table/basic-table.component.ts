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
  selector: 'app-basic-table',
  imports: [CommonModule, ZardBreadcrumbModule],
  standalone: true,
  templateUrl: './basic-table.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BasicTableComponent {
  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      department: 'IT',
      status: 'Active',
      createdAt: '2025-01-10',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      department: 'Finance',
      status: 'Inactive',
      createdAt: '2025-02-12',
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'michael@example.com',
      role: 'Editor',
      department: 'Marketing',
      status: 'Active',
      createdAt: '2025-03-05',
    },
    {
      id: 4,
      name: 'Anna White',
      email: 'anna@example.com',
      role: 'Admin',
      department: 'HR',
      status: 'Active',
      createdAt: '2025-04-20',
    },
    {
      id: 5,
      name: 'David Green',
      email: 'david@example.com',
      role: 'User',
      department: 'Sales',
      status: 'Inactive',
      createdAt: '2025-05-15',
    },
    {
      id: 6,
      name: 'Sara Blue',
      email: 'sara@example.com',
      role: 'Editor',
      department: 'Design',
      status: 'Active',
      createdAt: '2025-06-01',
    },
  ];

  onUpdate(user: User) {
    alert(`Update user: ${user.name}`);
  }

  onDelete(user: User) {
    if (confirm(`Are you sure to delete ${user.name}?`)) {
      this.users = this.users.filter((u) => u.id !== user.id);
    }
  }
}
