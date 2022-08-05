import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ example: 'Lavesh', description: 'Name of user' })
  name: string;

  @ApiProperty({ example: 'demo@gmail.com', description: 'Email of user' })
  email: string;

  @ApiProperty({
    example: 'true',
    description: 'Is user active',
  })
  active: boolean;
}
