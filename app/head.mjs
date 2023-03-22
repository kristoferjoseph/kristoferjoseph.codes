import { getStyleTag } from '@enhance/arc-plugin-styles/get-styles'

export default function Head() {
  return`
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <title>Kristofer Joseph</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${getStyleTag()}
        <link rel='stylesheet' href='/_public/css/global.css' />
        <link rel='stylesheet' href='/_public/css/dark-violet.css' />
      </head>
  `
}
