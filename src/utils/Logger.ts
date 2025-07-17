const CONSOLE_STYLE = ['color: #FFF', 'font-size: 14px', 'padding: 6px', 'border-radius:4px'];

export const successColor = '#28a745';
export const warningColor = '#ffc107';
export const errorColor = '#dc3545';
export const processingColor = '#007bff';

export class Logger {
  static success(log: string) {
    console.log(`%c ✅ SUCCESS : ${log}`, [...CONSOLE_STYLE, `background: ${successColor}`].join(';'));
  }
  static warning(log: string) {
    console.log(`%c ⚠️ WARNING : ${log}`, [...CONSOLE_STYLE, `background: ${warningColor}`].join(';'));
  }
  static error(log: string) {
    console.log(`%c ❌ ERROR : ${log}`, [...CONSOLE_STYLE, `background: ${errorColor}`].join(';'));
  }
  static processing(log: string) {
    console.log(`%c ⏳ PROCESSING : ${log}`, [...CONSOLE_STYLE, `background: ${processingColor}`].join(';'));
  }
}
