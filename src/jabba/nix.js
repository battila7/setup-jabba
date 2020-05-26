async function installJabba () {
  const jabbaInstallerPath = await this._deps.cache.downloadTool('https://github.com/shyiko/jabba/raw/master/install.sh')

  await this._deps.exec.exec('bash', [jabbaInstallerPath])
}

function jabbaPath () {
  const homeDirectory = this._deps.process.env.HOME

  return this._deps.path.join(homeDirectory, '.jabba', 'bin', 'jabba')
}

const nixImpl = {
  installJabba,
  jabbaPath
}

module.exports = nixImpl
