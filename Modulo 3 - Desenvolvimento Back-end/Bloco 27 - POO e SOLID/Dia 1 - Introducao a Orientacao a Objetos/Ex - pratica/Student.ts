class student {
  private _enrollment: string;
  private _name: string;
  private _testResults: [number, number, number, number];
  private _academicWorkResults: [number, number];

  constructor(
    enrollment: string, 
    name: string, 
    testResults: [number, number, number, number], 
    academicWorkResults: [number, number]
  ) {
    this._enrollment = enrollment;
    this._name = name;
    this._testResults = testResults;
    this._academicWorkResults = academicWorkResults;
  }
}
