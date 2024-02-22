import { Injectable } from '@nestjs/common';

@Injectable()
export class RainfallService {
    calculateRainTiles(numbers: number[]): number {
        return numbers.length;
    }
}
