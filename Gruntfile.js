module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				files: {
					'dist/styles/application.css' : 'sass/application.scss'
				}
			}
		},

		autoprefixer: {
			dist: {
				files: {
					'dist/styles/application.css' : 'dist/styles/application.css'
				}
			}
		},

		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'dist/styles',
		      src: ['*.css', '!*.min.css'],
		      dest: 'dist/styles',
		      ext: '.min.css'
		    }]
		  }
		},

		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'cssmin']
			}
		},

	  'gh-pages': {
	    options: {
	      base: 'dist'
	    },
	    src: ['**']
	  },

		aws: grunt.file.readJSON('aws-keys.json'),

		aws_s3: {
		  options: {
		    accessKeyId: '<%= aws.AWSAccessKeyId %>',
		    secretAccessKey: '<%= aws.AWSSecretKey %>',
		    region: 'eu-central-1',
		    uploadConcurrency: 5,
		    downloadConcurrency: 5
		  },
		  production: {
		    options: {
		      bucket: 'deioo.uk',
		    },
		    files: [
		      {expand: true, cwd: 'dist/', src: ['**'], dest: '', stream: true}
		    ]
		  },
		  download_production: {
		    options: {
		      bucket: 'deioo.uk'
		    },
		    files: [
		      {dest: '/', cwd: '_backup/', action: 'download'},
		    ]
		  }
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.loadNpmTasks('grunt-aws-s3');
	grunt.registerTask('generate',['sass', 'autoprefixer', 'cssmin']);
	grunt.registerTask('default',['watch']);
}
