module.exports = function(grunt) {
    grunt.initConfig({
      ts: {
        options: {
                target: 'es5',
                verbose: true,
                sourceMap: false
        },
        default : {
          src: ["**/*.ts", "!node_modules/**/*.ts"],
          dest: './build/'
        }
      }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);
  };