import { provideHttpClient } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { provideRouter } from "@angular/router";
import { IdleTimeoutService } from "../idle-timeout.service";
import { IdleWarningDialog } from "./idle-warning-dialog";

export const IDLE_WARNING_DIALOG_PROVIDERS = [
  MatDialogModule,
  provideHttpClient(),
  provideRouter([]),
  importProvidersFrom(),
  IdleTimeoutService,
  IdleWarningDialog,
];
