import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';

@Injectable()
export class AwsService {
  private s3: AWS.S3;

  constructor(private readonly configService: ConfigService) {
    this.s3 = new AWS.S3({
      accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
      secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
      region: 'ca-central-1',
    });
  }

  async uploadToS3(file, bucketName: string, folderName: string) {
    const { originalname } = file;
    const fileStream = file.buffer;
    const fileName = `${folderName}/${originalname}`;

    const uploadParams = {
      Bucket: bucketName,
      Body: fileStream,
      Key: fileName,
    };

    return await this.s3.upload(uploadParams).promise();
  }
}
