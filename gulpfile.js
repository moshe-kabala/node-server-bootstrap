
const gulp = require('gulp');

const baseInstallPath = process.env.BASE_INSTALL_PATH;
const projectInstallPath= process.env.PROJECT_PATH;

gulp.task('deploy', function () {
    const fullDeployPath = `${baseInstallPath}${projectInstallPath}`;
    console.log( `deploying in : ${fullDeployPath}`)
    return gulp
        .src([
            './**/dist/**/*',
            './**/node_modules/**/*',
        ])
        .pipe( gulp.dest( fullDeployPath ) );
});



