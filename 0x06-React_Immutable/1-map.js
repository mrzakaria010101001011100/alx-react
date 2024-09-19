#!/usr/bin/node
#!/usr/bin/node
import { Map } from 'immutable';

export default function getImmutableObject(object) {
  return Map(object);
}


