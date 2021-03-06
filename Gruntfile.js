module.exports = function (grunt) {

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'styles',
                    src: ['**/*.scss'],
                    dest: './styles/dist',
                    ext: '.css'
                }]
            }
        }
    });
    // Default task(s).
    grunt.registerTask('default', ['uglify']);
};