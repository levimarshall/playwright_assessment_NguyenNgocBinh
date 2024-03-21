import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

const testDir = defineBddConfig({
  paths: ['features/*.feature'],
  require: ['steps/*.ts'],
  importTestFrom: 'steps/fixtures.ts',
});

export default defineConfig({
  testDir,

  snapshotDir : './snapshots',

  reporter: [cucumberReporter('html', { outputFile: 'cucumber-report/report.html' })],
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] }, // this option for Web testing
    // },

    {
        name: 'webkit',
        use: { ...devices['iPhone 12 Pro'] }, // this option for Mobile testing
      },
  ],

  use: {
    trace: 'retain-on-failure',
  },

  timeout: 60000,

  retries: 3,

});