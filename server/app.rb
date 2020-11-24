require_relative 'modules/dbhandler'

class App < Sinatra::Base

    register Sinatra::Reloader

    get '/test' do

        File.read(File.join('public', 'testing.html'))

    end

    post '/test' do

        DBhandler.run_test

        redirect '/'

    end


end