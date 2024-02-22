import { Body, Controller, Post, HttpCode } from '@nestjs/common';
import { RainfallService } from './rainfall.service';
import { RainSurfaceDTO } from './rain.surface.dto';

@Controller('/api/v1/rainfall')
export class RainfallController {
    constructor(private readonly rainfallService: RainfallService) {}

    @Post()
    @HttpCode(200)
    calculateRainTiles(@Body() RainSurface: RainSurfaceDTO): number {
        return this.rainfallService.calculateRainTiles(RainSurface);
    }

}
