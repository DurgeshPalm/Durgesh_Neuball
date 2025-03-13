import { Global, Module } from '@nestjs/common';
import { FileUploadService } from './file_upload.service';

@Global()
@Module({
  providers: [FileUploadService],
  exports: [FileUploadService], // Export the service for use in other modules
})
export class FileUploadModule {}
