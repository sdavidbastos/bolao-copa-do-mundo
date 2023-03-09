import { Repository } from "../interfaces/IRepository";

export class InMemoryRepository<T extends { id: string }> implements Repository<T> {
    constructor(private data: T[] = []){}
  
    getAll(): T[] {
      return this.data;
    }
  
    getById(id: string): T | undefined {
      return this.data.find(item => item.id === id);
    }
  
    add(item: T): void {
      this.data.push(item);
    }
  
    update(item: T): void {
      const index = this.data.findIndex(i => i.id === item.id);
      if (index !== -1) {
        this.data[index] = item;
      }
    }
  
    delete(id: string): void {
      const index = this.data.findIndex(item => item.id === id);
      if (index !== -1) {
        this.data.splice(index, 1);
      }
    }
  }
  