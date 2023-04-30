import { Container, format, transports, Logform } from 'winston';

const { combine, label, prettyPrint, printf } = format;
const loggers = {};
const container = new Container();

export function getLogger(category: string, categoryLabel: string = category) {
  const formatter = (data: Logform.TransformableInfo) =>
    `[${data.level}][${data.label}] ${data.message}`;
  const formatters = [label({ label: categoryLabel })];

  formatters.push(prettyPrint(), printf(formatter));
  container.add(category, {
    transports: [
      new transports.Console({
        level: 'info',
        format: combine(...formatters)
      })
    ]
  });

  if (!loggers[category]) {
    loggers[category] = container.get(category);
  }

  return loggers[category];
}
