import { Injectable } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Injectable()
export class FileUploadService {
  getMulterOptions(destination: string) {
    return {
      storage: diskStorage({
        destination, // Folder where files will be saved
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const fileExt = extname(file.originalname);
          const filename = `${file.fieldname}-${uniqueSuffix}${fileExt}`;
          callback(null, filename);
        },
      }),
    };
  }
}
