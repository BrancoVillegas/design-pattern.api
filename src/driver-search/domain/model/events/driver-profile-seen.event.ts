export class DriverProfileSeenEvent {
  constructor(
    public readonly driverId: string,
    public readonly timestamp: Date,
  ) {}
}
