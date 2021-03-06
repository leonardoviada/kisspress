import 'reflect-metadata';
import { Methods }        from './Methods';
import { MetadataKeys }   from './MetadataKeys';
import { RequestHandler } from 'express';

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

const routeBinder = (method: string) => (path: string) => (target: any, key: string, desc: RouteHandlerDescriptor): void => {
    Reflect.defineMetadata(MetadataKeys.path, path, target, key);
    Reflect.defineMetadata(MetadataKeys.method, method, target, key);
  }
;

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const del = routeBinder(Methods.del);
export const patch = routeBinder(Methods.patch);
export const put = routeBinder(Methods.put);


