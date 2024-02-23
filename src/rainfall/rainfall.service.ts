import { Injectable } from '@nestjs/common';
import { RainSurfaceDTO } from './rain.surface.dto';

@Injectable()
export class RainfallService {
    calculateRainTiles(rainSurface: RainSurfaceDTO): number {
        let numbers: number[] = rainSurface.numbers;
        let nLength = numbers.length;

        if (nLength < 3) return 0;

        let rainSum = 0;
        let left: number[] = [];
        let right: number[] = [];

        left[0] = numbers[0];
        for (let i = 1; i < nLength; i++) {
            left[i] = Math.max(left[i - 1], numbers[i]);
        }

        right[nLength - 1] = numbers [nLength - 1];
        for (let i = nLength - 2; i >= 0; i--) {
            right[i] = Math.max(right[i + 1], numbers[i]);
        }

        for (let i = 0; i < nLength; i++) {
            rainSum += Math.min(left[i], right[i]) - numbers[i];
        }

        return rainSum;
    }
}
