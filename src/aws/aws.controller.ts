import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AwsService } from './aws.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('aws')
export class AwsController {
  constructor(private readonly awsService: AwsService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    const bucketName = 'aws-s3-work';
    const folderName = 'images';

    const result = await this.awsService.uploadToS3(
      file,
      bucketName,
      folderName,
    );

    return result.Location;
  }
}
