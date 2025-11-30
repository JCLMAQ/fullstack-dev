import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ApiConfig } from '../api-config/api-config';

@Injectable({
  providedIn: 'root'
})
export class AvatarBase64 {

  private http = inject(HttpClient);
  private apiConfig = inject(ApiConfig);

  async uploadAvatarBase64(base64Data: string): Promise<{ message: string }> {
    const url = `${this.apiConfig.getApiUrl()}/${this.apiConfig.getApiPrefix()}/avatar-base64/upload`;
    console.log('🔍 Sending to URL:', url);
    console.log('📊 Data length:', base64Data.length);
    console.log('🏷️ Data preview:', base64Data.substring(0, 100));
    return await firstValueFrom(
      this.http.post<{ message: string }>(url, { base64Data })
    );
  }

  // Méthode de test
  async testEndpoint(testData: Record<string, unknown>): Promise<Record<string, unknown>> {
    const url = `${this.apiConfig.getApiUrl()}/${this.apiConfig.getApiPrefix()}/avatar-base64/test`;
    console.log('🧪 Testing endpoint:', url);
    return await firstValueFrom(
      this.http.post<Record<string, unknown>>(url, testData)
    );
  }

  async getCurrentAvatar(): Promise<{ avatarData: string | null }> {
    const url = `${this.apiConfig.getApiUrl()}/${this.apiConfig.getApiPrefix()}/avatar-base64/current`;
    return await firstValueFrom(
      this.http.get<{ avatarData: string | null }>(url)
    );
  }

}
