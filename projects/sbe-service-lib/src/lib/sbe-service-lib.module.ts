import { NgModule } from '@angular/core';
import { SbeServiceLibComponent } from './sbe-service-lib.component';
import { TelemetryGeneratorService } from './telemetry/telemetry-generator.service';

@NgModule({
  declarations: [SbeServiceLibComponent],
  imports: [
    
  ],
  exports: [SbeServiceLibComponent],
  providers: [TelemetryGeneratorService]
})
export class SbeServiceLibModule { }
