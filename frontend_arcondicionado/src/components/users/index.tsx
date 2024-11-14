import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import React from "react";

interface UserInformations {
  foto?: string;
  nome: string;
  sobrenome: string;
  cargo?: string; // ? username é opcional
  nvl_acesso: string;
  email: string;
}

export default function UserCard({ foto, nome, sobrenome, cargo, nvl_acesso, email }: UserInformations) {

  const [position, setPosition] = React.useState("bottom")

  return (
    <div>
      {/* Card Exemplo */}
      <Card className="shrink-0 transition-colors p-4 border rounded-lg shadow-md">
        <CardContent className="flex flex-col items-center">
          {/* Avatar */}
          <Avatar className="w-20 h-20 my-4">
            <AvatarImage src={foto} />
          </Avatar>

          {/* Nome e Cargo */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold">{nome}</h2>
            <h2 className="text-lg font-semibold">{sobrenome}</h2>
            <p className="text-sm text-gray-600">{cargo}</p>
          </div>

          {/* User Information */}
          <div className="mb-6">
            <p className="text-base font-bold">Nível de acesso:</p>
            <p className="text-sm text-gray-500 mb-2">{nvl_acesso}</p>
            <p className="text-base font-bold">Contato:</p>
            <p className="text-sm text-gray-500 mb-2">{email}</p>
          </div>

          {/* Buttons */}
          <CardFooter className="gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Editar</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Editar Usuário</DialogTitle>
                  <DialogDescription>Editar informações do usuário</DialogDescription>
                </DialogHeader>

                <form className="grid grid-cols-4 items-center text-left gap-2">
                  <Label htmlFor="desc">Foto</Label>
                  <Input placeholder="URL" className="col-span-3" />

                  <Label htmlFor="desc">Nome</Label>
                  <Input placeholder="Digite seu nome" className="col-span-3" />

                  <Label htmlFor="desc">Sobrenome</Label>
                  <Input placeholder="Digite seu sobrenome" className="col-span-3" />

                  <Label htmlFor="desc">Email</Label>
                  <Input placeholder="Digite seu email" className="col-span-3" />

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="col-span-2">Cargo</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <DropdownMenuRadioItem value="top">Senior</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="bottom">Desenvolvedor</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="right">Estagiário</DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="col-span-2">Nível de Acesso</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <DropdownMenuRadioItem value="top">Administrador</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="bottom">Editor</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="right">Leitor</DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </form>
                <DialogFooter className="flex flex-row justify-end gap-2 sm:gap-0">
                  <Button type="submit">Salvar</Button>
                  <DialogClose asChild>
                    <Button type="button" variant="destructive">Cancelar</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive" >Deletar</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Deletar conta</DialogTitle>
                  <DialogDescription>Tem certeza que deseja deletar permanentemente o usuário?</DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex flex-row justify-end gap-2 sm:gap-0">
                  <Button type="submit">Sim</Button>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">Não</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
}