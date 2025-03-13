import { PartialType } from '@nestjs/mapped-types';
import { CreateNeuballUserDto } from './create-neuball_user.dto';

export class UpdateNeuballUserDto extends PartialType(CreateNeuballUserDto) {}
