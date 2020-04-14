module.exports = {
  hyperCustomTouchbar: [
    {
      label: 'Tools',
      options: [
        { command: 'yarn i', /*icon: './icons/icons8-database-44.png', backgroundColor: '#000' */ },
        { command: 'yarn start',/* icon: './icons/icons8-binary-file-44.png', backgroundColor: '#000' */ },
        { command: 'rails s',/* icon: './icons/icons8-dropbox-44.png', backgroundColor: '#000' */ },
        { command: 'code .',/* icon: './icons/icons8-dropbox-44.png', backgroundColor: '#000' */ },
      ]
    },
    {
      label: 'git',
      options: [
        { label: 'Co', command: 'git checkout', prompt: true },
        { label: 'pull', command: 'git pull' },
        { label: 'pull', command: 'git push' },
        { label: 'commit', command: 'git status' },
        { label: 'log', command: 'git log' },
        { label: 'add .', command: 'git add .',/* icon: './icons/icons8-add-file-44.png', iconPosition: 'right' */}
      ]
    }
  ]
};
