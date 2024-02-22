import { Injectable } from '@nestjs/common';
import { RainSurfaceDTO } from './rain.surface.dto';

@Injectable()
export class RainfallService {
    calculateRainTiles(rainSurface: RainSurfaceDTO): number {
        return rainSurface.numbers.length;
    }
}
