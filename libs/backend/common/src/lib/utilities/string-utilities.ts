import { Injectable } from "@nestjs/common";


@Injectable()
  export class StringUtilities {


// Compare one tring to another
async compareStricklyString( stringOne: string | undefined , stringTwo: string | undefined): Promise<boolean> {
  return stringOne === stringTwo
}

  }
