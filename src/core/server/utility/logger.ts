import * as alt from 'alt-server';
import chalk from 'chalk';

export default class Logger {
    static log(message: string): void {
        alt.log(`${chalk.blueBright('[Kompashkin RP]')} ${chalk.whiteBright(message)}`);
    }

    static warning(message: string): void {
        alt.log(`${chalk.blueBright('[Kompashkin RP]')} ${chalk.yellowBright(message)}`);
    }

    static error(message: string): void {
        alt.log(`${chalk.blueBright('[Kompashkin RP]')} ${chalk.redBright(message)}`);
    }

    static info(message: string): void {
        alt.log(`${chalk.blueBright('[Kompashkin RP]')} ${chalk.blueBright(message)}`);
    }

    static clearLastLine(): void {
        process.stdout.moveCursor(0, -1);
        process.stdout.clearLine(1);
    }

    static passed(message: string): void {
        Logger.clearLastLine();
        alt.log(`${chalk.greenBright(`    ✔️  ${message}`)}`);
    }

    static failed(message: string): void {
        Logger.clearLastLine();
        alt.log(`${chalk.redBright(`    ❌  ${message}`)}`);
    }
}