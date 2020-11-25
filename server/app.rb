require_relative 'modules/dbhandler'

class App < Sinatra::Base

    register Sinatra::Reloader

    get '/test' do

        File.read(File.join('public', 'testing.html'))

    end

    post '/test' do

        redirect '/test'

    end

    get '/api/users' do

        DBhandler.get("users", "name")

    end

    post '/api/create-user' do

        # for testing purposes
        inputname = "test"
        inputpwd = "go"

        if DBhandler.get("users","name", "WHERE name = '#{inputname}'").length < 1
            DBhandler.insert("users", "'name', 'password'", [inputname, inputpwd])
            # TODO revise returned response
            return 200
        else

            #TODO create proper error message
            return 400

        end

    end

    post '/api/login' do

        #for testing purposes
        inputname = "test"
        inputpwd = "go"

        user = DBhandler.get("users","name, password", "WHERE name = '#{inputname}'")

        if user.length == 1 && user.first["password"] == inputpwd
            # TODO revise returned response
            return 200
        else
            #TODO create proper error message
            return 400

        end

    end

    get '/api/posts' do

        DBhandler.get("posts", "*")

    end

    get '/api/comments' do

        DBhandler.get("comments", "*")

    end

    get '/api/roles' do

        DBhandler.get("roles", "*")

    end

end