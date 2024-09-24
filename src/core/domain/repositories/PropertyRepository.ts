import { Property } from "@/core/domain/entities/Property";
export interface PropertyRepository {
  getProperties(): Promise<Property[]>;
}
