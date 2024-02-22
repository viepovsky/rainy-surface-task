import { Test, TestingModule } from '@nestjs/testing';
import { RainfallController } from '../../src/rainfall/rainfall.controller';
import { RainfallService } from '../../src/rainfall/rainfall.service';

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
});
