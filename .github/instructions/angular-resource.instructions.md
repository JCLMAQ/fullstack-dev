---
description: "Angular v21+ patterns for data fetching with Resource API and httpResource" 
applyTo: "**/*.ts, **/*.html"
---

# Angular Resource API and httpResource Usage Patterns
## 1. Overview of Resource API and httpResource
- **Resource API:** A new Angular API for managing async data with signals, providing a reactive and efficient approach to data fetching and state management.
- **httpResource:** A specialized type of resource designed for handling HTTP requests, exposing all related request information via signals. Primarily used for fetching data, not for POST, PUT, DELETE operations. 
## 2. When to Use Resource API and httpResource
- Use the Resource API for managing async data in components and services, especially when you want to leverage Angular's reactive signals for state management.
- Use httpResource specifically for fetching data from APIs, providing a streamlined way to handle loading states, errors, and responses with signals.
## 3. Basic Usage Patterns
- **Creating a Resource:** Use the `resource()` function to create a resource for managing async data. For HTTP requests, use `httpResource()` to create a resource that handles the request and exposes signals for loading, error, and response states.
- **Reactive State Management:** Use the signals provided by the Resource API and httpResource to manage loading states, handle errors, and access response data in a reactive way within your components and services.
## 4. Best Practices
- **Error Handling:** Implement comprehensive error handling strategies when using resources, including retry logic and user-friendly error messages.
- **Signal Integration:** Use `toSignal()` to convert observables to signals when integrating with existing RxJS-based services or APIs, ensuring a smooth transition to the Resource API.
- **Performance Optimization:** Use the Resource API's built-in caching and state management features to optimize performance and reduce unnecessary HTTP requests.
- **Separation of Concerns:** Keep data fetching logic within services using the Resource API, and use components primarily for presentation and user interaction, leveraging signals for reactive updates.
## 5. Advanced Patterns
- **Derived State:** Use computed signals to derive state from resource signals, such as combining loading and error states to determine overall request status.
- **Resource Composition:** Compose multiple resources together to manage complex data fetching scenarios, such as dependent API calls or aggregating data from multiple sources.
- **Custom Resource Logic:** Extend the Resource API with custom logic for specific use cases, such as handling pagination, implementing optimistic updates, or integrating with third-party APIs that require special handling.
## 6. Migration Strategies
- **Identify Data Fetching Logic:** Start by identifying all places in your codebase where data fetching occurs, especially those that can benefit from reactive state management with signals.
- **Incremental Migration:** Migrate data fetching logic incrementally, starting with less complex components or services, and gradually moving towards more complex scenarios as you become familiar with the Resource API and httpResource patterns.
- **Testing and Validation:** Ensure thorough testing of your data fetching logic after migration, including unit tests for services and integration tests for components that rely on the Resource API, to validate that the new patterns work as expected and that there are no regressions in functionality or performance.
## 7. Conclusion
The Angular Resource API and httpResource provide powerful tools for managing async data with signals, enabling a more reactive and efficient approach to data fetching in Angular applications. By following the usage patterns and best practices outlined in this guide, you can effectively leverage these APIs to enhance your application's performance, maintainability, and user experience.
## 8. Example Usage
```typescript
import { Component } from '@angular/core';
import { httpResource } from '@angular/core';
@Component({
  selector: 'app-data-fetcher',
  template: `
    <div *ngIf="dataResource.loading">Loading...</div>
    <div *ngIf="dataResource.error">Error: {{ dataResource.error }}</div>
    <div *ngIf="dataResource.data">{{ dataResource.data }}</div>
  `
})
export class DataFetcherComponent {
  dataResource = httpResource(() => fetch('https://api.example.com/data').then(res => res.json()));
}
```
In this example, `httpResource` is used to fetch data from an API endpoint. The component template reacts to the loading, error, and data states provided by the resource, demonstrating a reactive approach to data fetching with Angular's Resource API.  

```typescript
// Simple fetching based on an User ID signal
user = httpResource(() => `/api/users/${this.userId()}`);

// Fetching with parameters and error handling
user = httpResource(() => `/api/users/${this.userId()}`, {
  onError: (error) => {
    console.error('Failed to fetch user:', error);
    return { name: 'Unknown User' }; // Fallback data
  }
});   

// More complex fetching with custom request configuration
userResource = httpResource<User>(() => ({
  url: `/api/users/${this.userId()}`,
  method: 'GET',
  headers: { 'Authorization': 'Bearer ...' },
  params: { detail: 'full' }
}));
```

## Additional Resources
- [Angular Resource API Documentation](https://angular.io/api/core/resource)
- [Angular httpResource Documentation](https://angular.io/api/core/httpResource)
- [Angular httpResource Guide](https://angular.io/guide/http/http-resource)
- [Angular Signals Guide](https://angular.io/guide/signals)
- [Migrating to Angular Resource API](https://angular.io/guide/migration-resource-api)
- [Migrating to Angular httpResource](https://angular.io/guide/migration-http-resource)
- [Best Practices for Angular Data Fetching](https://angular.io/guide/data-fetching-best-practices)
