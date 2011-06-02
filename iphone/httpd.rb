#!/usr/bin/env ruby
require 'rubygems'
require 'webrick'

#document_root = ENV['HOME']
document_root = './'

server = WEBrick::HTTPServer.new({
  :DocumentRoot => document_root,
  :BindAddress => '0.0.0.0',
  :Port => 8080
})


['INT', 'TERM'].each {|signal|
  Signal.trap(signal){ server.shutdown }
}

server.start
