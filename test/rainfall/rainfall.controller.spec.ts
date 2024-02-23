import { Test, TestingModule } from '@nestjs/testing';
import { RainfallController } from '../../src/rainfall/rainfall.controller';
import { RainfallService } from '../../src/rainfall/rainfall.service';
import { RainSurfaceDTO } from 'src/rainfall/rain.surface.dto';

describe('RainfallController', () => {
  let controller: RainfallController;
  let service: RainfallService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RainfallController],
      providers: [RainfallService],
    }).compile();

    controller = module.get<RainfallController>(RainfallController);
    service = module.get<RainfallService>(RainfallService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should calculate the rain tiles of water correctly', () => {
    const rainSurface: RainSurfaceDTO = {
      numbers: [3, 2, 4, 1, 2]
    }    
    expect(controller.calculateRainTiles(rainSurface)).toEqual(2)

    rainSurface.numbers = [4, 1, 1, 0, 2, 3];
    expect(controller.calculateRainTiles(rainSurface)).toEqual(8);
    
    rainSurface.numbers = [1, 1, 0, 1, 3, 2, 2, 4, 1, 2, 1, 0];
    expect(controller.calculateRainTiles(rainSurface)).toEqual(4);

    rainSurface.numbers = [1, 1, 0, 1, 3, 2, 2, 4, 1, 2, 3, 0];
    expect(controller.calculateRainTiles(rainSurface)).toEqual(6);

    rainSurface.numbers = [1, 0];
    expect(controller.calculateRainTiles(rainSurface)).toEqual(0);
  });

});
