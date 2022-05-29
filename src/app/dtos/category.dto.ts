import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validateOrReject } from "class-validator";

import { AccessType, Category } from "../models/category.model";
import { apiUrl } from '../../api/index';

export interface ICreateCategoryDto extends Omit<Category, 'id'>{}

export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 280)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  acces?: AccessType | undefined;
}

(async() => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'my tweet!'
    dto.image = apiUrl
    await validateOrReject(dto);
  } catch (error) {
    console.error(`Ocurrió un error: ${error}`);
  }
})()
