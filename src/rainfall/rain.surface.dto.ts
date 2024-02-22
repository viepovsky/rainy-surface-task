import { IsNumber, IsArray, ArrayNotEmpty } from 'class-validator';

export class RainSurfaceDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  numbers: number[];
}
