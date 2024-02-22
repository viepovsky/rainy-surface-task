import { Body, Controller, Post } from '@nestjs/common';
import { RainfallService } from './rainfall.service';

@Controller('rainfall')
export class RainfallController {
    constructor(private readonly rainfallService: RainfallService) {}

    @Post()
    calculateRainTiles(@Body() numbers: number[]): number {
        return this.rainfallService.calculateRainTiles(numbers);
    }

}
