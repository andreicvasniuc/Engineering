def iputs(obj)
  obj = obj.to_a if obj.is_a? Mongoid::Criteria
  puts obj.inspect
end