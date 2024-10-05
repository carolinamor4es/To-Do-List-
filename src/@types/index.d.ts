export interface Task {
  id: number; 
  category: string;
  taskName: string;
  dueDate?: string; 
  notes?: string;
  completed: boolean; 
}
  